'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
FUNCTIONS
    defined using def
    built in arguments
'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''

def foo(x):
    print('foo called with parameter: %s' % x)

def sayHi(name):
    print('Hello %s!' % name)

foo('test')
sayHi('Michael')

#default arguments
def myRange(start=10, end=100):
    return range(start, end)

print(myRange())
print(myRange(75))
print(myRange(end=25))