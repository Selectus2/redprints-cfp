class CFP < FrozenRecord::Base
  class << self
    def primary = find("primary")
  end

  class DateTimeType
    def self.load(*) = ActiveModel::Type::DateTime.new.deserialize(*)
  end

  attribute :deadline, DateTimeType
  attribute :starts_at, DateTimeType

  def closed? = deadline.present? && deadline.past?
  def not_yet_open? = starts_at.present? && starts_at.future?
  def open? = !closed? && !not_yet_open?
end
