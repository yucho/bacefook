module Utility
  module SanityChecker
    def os(**hash)
      OpenStruct.new(hash)
    end

    def valid_email?(address_str)
      !! address_str.strip.match(/\A[\w+\-.]+@[a-z\d\-]+(\.[a-z\d\-]+)*\.[a-z]+\z/i)
    end

    def sanitize_email(address_str)
      address_str.strip.downcase
    end

    def valid_phone?(number_str)
      # For now, do a naive check. Do better later
      number_str.split("").all? { |c| "0123456789()-+x".include? c } &&
      number_str.length >= 6
    end

    def numericalize_phone(number_str)
      number_str.each_char.select {|c| (0..9).to_a.join("").include?(c)}.join("")
    end
  end
end
