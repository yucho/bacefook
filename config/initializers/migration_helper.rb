# You should only add new helpers. Do not modify old helpers as it will break
# previous migrations that depend on them
module MigrationHelper
  def add_max_length(table, arr_cn_len)
    reversible do |dir|
      dir.up do
        sanitized_arr = arr_cn_len[0].is_a?(Array) ?  arr_cn_len : [arr_cn_len]
        execute sql_add_max_length(table, sanitized_arr)
      end
      dir.down do
        extracted_cn = arr_cn_len.flatten.select.each_with_index { |_, i| i.even? }
        execute sql_remove_max_length(table, *extracted_cn)
      end
    end
  end

  # Implement reversible action before you use it!
  def remove_max_length(table, *arr_cn_len)
    execute sql_remove_max_length(table, *arr_cn_len)
  end

  private

    def sql_add_max_length(table, arr_cn_len)
      alter_table = "ALTER TABLE #{table}"
      add_constraints = arr_cn_len.map do |(cn, len)|
        <<~SQL
          ADD CONSTRAINT max_length_#{cn} CHECK(LENGTH(#{cn}) <= #{len}),
        SQL
      end
      .join("  ").chomp(",\n")
      <<~SQL
        #{alter_table}
          #{add_constraints}
        ;
      SQL
    end

    def sql_remove_max_length(table, *arr_cn_len)
      alter_table = "ALTER TABLE #{table}"
      drop_constraints= arr_cn_len.map { |cn| "DROP CONSTRAINT max_length_#{cn}" }.join("\n  ")
      <<~SQL
        #{alter_table}
          #{drop_constraints}
        ;
      SQL
    end
end

ActiveRecord::Migration.send(:include, MigrationHelper)
