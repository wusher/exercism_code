defmodule Beer do

  def sing(start, finish // 0) do
    song = gather_verses(start, finish) |> combine_verses 
    Enum.join [song, "\n"]
  end

  def verse(0) do
    "#{String.capitalize(beer_text(0))} on the wall, #{beer_text(0)}.\nGo to the store and buy some more, #{beer_text(99)} on the wall.\n"
  end

  def verse(1) do
    "#{beer_text(1)} on the wall, #{beer_text(1)}.\nTake it down and pass it around, #{beer_text(0)} on the wall.\n"
  end

  def verse(existing) do
    remaining = existing - 1
    "#{beer_text(existing)} on the wall, #{beer_text(existing)}.\nTake one down and pass it around, #{beer_text(remaining)} on the wall.\n"
  end

  defp combine_verses(verses) do
    Enum.join verses, "\n"
  end

  defp gather_verses(start, finish) do
    Enum.map(start..finish, fn (x) -> verse x end ) 
  end

  defp beer_text(0) do
    "no more bottles of beer"
  end

  defp beer_text(1) do
    "1 bottle of beer"
  end

  defp beer_text(x) do
    "#{x} bottles of beer"
  end
end
