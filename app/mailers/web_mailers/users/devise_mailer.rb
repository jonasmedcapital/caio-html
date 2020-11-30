class WebMailers::Users::DeviseMailer < Devise::Mailer

  def confirmation_instructions(record, token, opts={})
    @record = record
    @confirmation_link = "#{ENV['DEFAULT_URL_HOST']}/confirmacao?confirmation_token=#{record.confirmation_token}"

    opts[:from] = %("Atendimento MedCapital" <atendimento@medcapital.com.br>)
    if @record.unconfirmed_email
      opts[:to] = %("#{@record.name}" <#{@record.unconfirmed_email}>)
    else
      opts[:to] = %("#{@record.name}" <#{@record.email}>)
    end
    

    mail = super
    mail.subject = "Olá #{@record.name.split(" ").first}, seu email de confirmação de conta da MedCapital chegou!"
    mail
  end

  def password_change(record, opts={})
    @record = record
    opts[:from] = %("Atendimento MedCapital" <atendimento@medcapital.com.br>)
    opts[:to] = %("#{@record.name}" <#{@record.email}>)

    mail = super
    mail.subject = "Olá #{@record.name.split(" ").first}, viemos notificar que a sua senha foi alterada!"
    mail
  end

  def reset_password_instructions(record, token, opts={})
    @record = record
    # @password_link = edit_user_password_url(@record, reset_password_token: token)

    #reset_password_token = @record.reset_password_token
    #@raw, @hashed = Devise.token_generator.generate(User, :reset_password_token)
    #@record.reset_password_token = @hashed
    #@record.reset_password_sent_at = Time.current.utc

    @raw = @record.send(:set_reset_password_token)

    @password_link = "#{ENV['DEFAULT_URL_HOST']}/senha/edit?reset_password_token=#{@raw}"

    opts[:from] = %("Atendimento MedCapital" <atendimento@medcapital.com.br>)
    opts[:to] = %("#{@record.name}" <#{@record.email}>)

    mail = super
    mail.subject = "Olá #{@record.name.split(" ").first}, seu email para alterar sua senha na MedCapital chegou!"
    mail
  end
  

end