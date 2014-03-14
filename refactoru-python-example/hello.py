'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
Booleans: 
    True
    False
Operators:
    and
    or
    not
Equality
    ==
    is (===)
Falseys
    None
Compares by value and not by reference
'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''

# comment
x = 7
y = 10

if x > 5 and y == 10:
    print('hello')
elif x < 3:
    print('So tiny!')
else:
    print('Not so much')


'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
Arrays (Lists) and strings
    negative indices wrap around
    len()
    subarrays [x:x] inclusive of first exclusive of second
'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
#length
print(len('Michael'))
print(len([1,2,3,4]))

#negative wrapping
print('Michael'[-1])
print([0,1,2,3,4][-1])

#range
print('Michael'[2:4])
print([0,1,2,3,4][1:2])

#interpolation
print('Hello %s! You are awesome!') %('Michael')

'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
Lists
    for <value> in <values>:
    range()
    slices()
    append()
'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
#prints a range of number can use starting point
print(range(5))
print(range(3,6))

a = [6,7,8,9,10,11,12,13,14]

for i in range(len(a)):
    print(a[i])

colors = ['red', 'green', 'yellow', 'blue']

for c in colors:
    print(c)

#slices and assignment
colors[1:3] = ['peachpuff']
print(colors)

#append
colors.append('burnt umber')
print(colors)

#list comprehension same as map
#uses condition before 'for' and applies to 
#each value of the array
students = ['Becky', 'Carlsbad', 'Reynold']

nameLengths = [len(s) for s in students]
print nameLengths







