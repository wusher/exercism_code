defmodule Teenager do
  def hey(content) do
    cond do
      Message.silence?(content) ->
        "Fine. Be that way!"
      Message.shouting?(content) ->
        "Woah, chill out!"
      Message.question?(content) ->
        "Sure."
      true ->
        "Whatever."
    end
  end
end

defmodule Message do

  def shouting?(content) do
    String.upcase(content) == content
  end

  def question?(content) do
    String.ends_with? content, "?"
  end

  def silence?(content) do
    String.strip(content || "") == ""
  end

end
