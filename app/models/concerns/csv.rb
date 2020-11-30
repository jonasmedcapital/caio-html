module Csv
  extend ActiveSupport::Concern


  def csv_model(attributes)
    CSV.generate do |csv|
      csv << attributes
    end
  end

  def to_csv(attributes, all_data)
    

    CSV.generate(headers: true) do |csv|
      csv << attributes

      all_data.each do |data|
        csv << attributes.map{ |attr| data.send(attr) }
      end
    end


  end
  


end