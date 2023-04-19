class AddWorkStationToUsers < ActiveRecord::Migration[7.0]
  def change
    add_column :users, :work_station, :string
  end
end
