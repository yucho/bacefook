require 'test_helper'

class QueriesControllerTest < ActionDispatch::IntegrationTest
  test "should get create" do
    get queries_create_url
    assert_response :success
  end

end
