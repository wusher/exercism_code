defmodule Anagram do

  def match(target, words) do
    anagram_key = to_anagram_key(target)
    Enum.filter words, fn(word) ->
      to_anagram_key(word) == anagram_key
    end
  end

  defp to_anagram_key(word) do
    normalize(word) |> tokenize
  end

  defp normalize(word) do
    String.downcase(word)
  end

  defp tokenize(word) do
    String.codepoints(word) |> Enum.sort
  end
end
