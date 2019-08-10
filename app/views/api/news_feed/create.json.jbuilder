@timestamp ||= Date.new

json.partial! "create", timestamp: @timestamp
