defmodule DNA do

  def dna_nucleotides do
    [?A, ?T, ?C, ?G]
  end

  def nucleotide_counts(dna) do
    Enum.reduce dna_nucleotides, HashDict.new, fn(nucleotide, data) ->
      HashDict.put_new(data, nucleotide, count(dna, nucleotide))
    end
  end

  def count(dna, nucleotide) do
    Regex.scan(%r/#{<<nucleotide>>}/, dna) |> Enum.count
  end

end
