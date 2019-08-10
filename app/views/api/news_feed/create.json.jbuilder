@timestamp ||= Time.new

json.partial! "create", timestamp: @timestamp
