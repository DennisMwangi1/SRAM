class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.string :first_name
      t.string :last_name
      t.string :email
      t.string :about
      t.text :pdf_files, array:true, default: [].to_yaml
       t.string :password_digest
    end
  end
end
