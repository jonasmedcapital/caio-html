class Users::Permissions::FeatureRepository < Base
  
  def self.build
    entity.new
  end

  def self.column_names
    entity.column_names - ["id", "active", "created_at", "updated_at"]
  end

  def self.table_name
    ::TableDecorator.name(entity.table_name)
  end

  def self.all_active
    entity.where(active: true)
  end
  
  def self.list_all_with_permissions(collection, current_user, feature)
    mapper.map_all_with_permissions(collection, current_user, feature)
  end

  def self.read_with_permissions(model, current_user, feature)
    mapper.map_with_permissions(model, current_user, feature)
  end

  def self.report_with_permissions(current_user, feature)
    mapper.report_with_permissions(entity, current_user, feature)
  end
  
  def self.all_groups
    all_active.pluck(:group).uniq
  end
  
  def self.features_by_group(group)
    all_active.where(group: group)
  end     
  
  def self.read(model)
    mapper.map(model)
  end

  def self.find_by_id(id)
    entity.find_by(id: id)
  end

  def self.find_by_name(name)
    feature = all_active.where(name: name).first
    if feature
      feature
    else
      entity.new
    end
  end

  def self.first_or_initialize(attrs)
    # all_active.where(name: attrs["name"]).first_or_initialize
    value_inspect = all_active.where(name: attrs["name"]).first_or_initialize
    value_inspect.attributes = attrs
    return value_inspect
    # if value_inspect.id.present?
    # else
    #   value_inspect.attributes = attrs
    #   return value_inspect
    # end
  end
  
  def find_by_email(email)
    all.where(email: email).first
  end

  def find_by_cpf(cpf)
    all.where(cpf: cpf).first
  end

  def find_by_name(name)
    all.where("name LIKE ?", "%#{name}%").first
  end

  def list_all(all)
    ::Users::UserMapper.new.map_all_active(all)
  end

  def read(user)
    ::Users::UserMapper.new.map(user)
  end

  def self.upload_all(model, file)

    ActiveRecord::Base.transaction do
      CSV.foreach(file.path, headers: true, header_converters: lambda { |name| ::Model::Dehumanize::TRANSLATE[TableDecorator.name(entity.table_name)][name] }) do |row|
        obj = entity.where(row.to_hash).first_or_initialize
        if obj.id.nil?
          obj.save
        end
      end
    end
    true
  end

  def self.data_handling(obj_column, obj_value)
    
    case obj_column
    when ""
    else
      obj_value
    end

  end
  


  private

  def self.entity
    "User::Permission::Feature".constantize
  end

  def self.mapper
    "Users::Permissions::FeatureMapper".constantize
  end
  
end