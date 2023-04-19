class RemovePdfFilesFromUsers < ActiveRecord::Migration[7.0]
  def change
    remove_column :users, :pdf_files, :text, array: true
  end
end
