class CFPSerializer < ApplicationSerializer
  attributes :id, :tracks, :field_names
  typelize id: "string", tracks: 'Record<Exclude<Proposal["track"], null>,string>', field_names: "Record<string,string> | undefined"

  attribute :is_closed do
    it.closed?
  end
  typelize is_closed: "boolean"

  attribute :is_open do
    it.open?
  end
  typelize is_open: "boolean"
end
