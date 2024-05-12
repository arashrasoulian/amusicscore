class Score < ApplicationRecord
  belongs_to :user

  has_many :storing
  has_many :users, through: :storing_types

  # has_one_attached :scorepdf

  validates :name, presence: true
  validates :scorepdf, presence: true
  validates :scoretype, presence: true
  validates :copmoser, presence: true
  validates :arranger, presence: true
  validates :name, presence: true

end
