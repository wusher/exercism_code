defmodule Words do

  def count(sentence) do
    normalize_sentence(sentence) |> sentence_to_words |> list_to_counted_hash
  end

  defp normalize_sentence(sentence) do
    String.downcase(sentence) 
  end

  defp sentence_to_words(sentence) do
    Regex.scan(%r/\w+/, sentence) |> List.flatten
  end

  defp list_to_counted_hash(list) do
    Enum.reduce list, HashDict.new, fn(word, dict) ->
      HashDict.update(dict, word, 1, fn(val) -> val + 1 end)
    end
  end

end
