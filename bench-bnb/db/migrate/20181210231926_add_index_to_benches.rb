class AddIndexToBenches < ActiveRecord::Migration[5.2]
  def change
    add_index :benches, [:lat, :lng], unique: true
  end
end
