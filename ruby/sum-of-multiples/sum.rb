class SumOfMultiples

  def self.to(number)
    return 0 if number <= 1
    multiples_of(number).inject(:+)
  end

  def self.multiples_of(number)
    puts number 
    nums = (number - 1).downto(1).select { |x| number % x == 0 }
    puts nums
    nums
  end

end
