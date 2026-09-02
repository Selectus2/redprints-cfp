class Avo::Actions::ExportProposals < Avo::BaseAction
  self.name = "Export to Excel"
  self.visible = -> { true }
  self.message = "Export selected proposals to an Excel spreadsheet"
  self.confirm_button_label = "Export"
  self.cancel_button_label = "Cancel"
  self.no_confirmation = true

  HEADERS = [
    "ID", "Title", "Track", "Status", "CFP", "Score", "Reviews",
    "Speaker Name", "Speaker Email", "Company", "Role",
    "Abstract", "Details", "Pitch", "Bio", "Socials",
    "Submitted At", "Created At"
  ].freeze

  def handle(query:, fields:, current_user:, resource:, **args)
    proposals = query.includes(user: :speaker_profile)

    package = Axlsx::Package.new
    workbook = package.workbook

    header_style = workbook.styles.add_style(
      b: true,
      bg_color: "4472C4",
      fg_color: "FFFFFF",
      alignment: {horizontal: :center, vertical: :center, wrap_text: true}
    )

    wrap_style = workbook.styles.add_style(
      alignment: {wrap_text: true, vertical: :top}
    )

    workbook.add_worksheet(name: "Proposals") do |sheet|
      sheet.add_row HEADERS, style: header_style

      proposals.find_each do |proposal|
        speaker = proposal.speaker_profile

        sheet.add_row [
          proposal.external_id,
          proposal.title,
          proposal.track,
          proposal.status,
          proposal.cfp_id,
          proposal.score,
          proposal.reviews_count,
          speaker&.name,
          speaker&.email,
          speaker&.company,
          speaker&.role,
          proposal.abstract,
          proposal.details,
          proposal.pitch,
          speaker&.bio,
          speaker&.socials,
          proposal.submitted_at&.strftime("%Y-%m-%d %H:%M"),
          proposal.created_at.strftime("%Y-%m-%d %H:%M")
        ], style: wrap_style
      end

      sheet.column_widths 12, 30, 12, 12, 10, 8, 8, 20, 25, 15, 15, 40, 40, 40, 40, 25, 18, 18
    end

    download package.to_stream.read, "proposals_#{Time.current.strftime("%Y%m%d_%H%M%S")}.xlsx"
  end
end
