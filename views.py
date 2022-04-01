from django.http import HttpResponse
from django.shortcuts import render


def index(request):
    # return HttpResponse('''<h1>Hello</h1> <a
    # href=https://www.youtube.com/watch?v=AepgWsROO4k&list=PLu0W_9lII9ah7DDtYtflgwMwpT3xmjXY9&index=7>
    # Django...</a>''')
    # ls={'Name':'Rohan','Lname':'Kumar','Age':'23'}

    return render(request, 'index.html')


def file(requeset):
    output = open('', "r")
    f = output.readlines()
    output.close()
    return HttpResponse(f)


def home(request):
    return HttpResponse('''<h1>Home</h1><a
    href=https://duo.google.com/?usp=duo_ald>
    Google Duo </a>''')


def back(request):
    return HttpResponse('''<a href='/'> back</a>''')


def analyze(request):
    djtext = request.POST.get('text', 'defalut')
    removepunc = request.POST.get('removepunc', 'off')
    fullcaps = request.POST.get('fullcaps', 'off')
    newlineremover = request.POST.get('newlineremover', 'off')
    extraspaceremover = request.POST.get('extraspaceremover', 'off')
    charcount = request.POST.get('charcount', 'off')

    # print(djtext)

    if removepunc == 'on':
        punctuation = '''!()-[]{};:'"\,<>.?@#$%&*_~'''
        analyzed = ""
        for char in djtext:
            if char not in punctuation:
                analyzed = analyzed+char
        parms = {'purpose': 'Removing Punctuation', 'analyzed_text': analyzed}
        # return render(request, 'analyze.html', parms)
        djtext = analyzed

    if fullcaps == 'on':
        analyzed = ""
        for char in djtext:
            analyzed = analyzed+char.upper()
        parms = {'purpose': 'Removing Upper Case', 'analyzed_text': analyzed}
        # return render(request, 'analyze.html', parms)
        djtext = analyzed

    if newlineremover == 'on':
        analyzed = ""
        for char in djtext:
            if char != '\n' and char != '\r':
                analyzed = analyzed+char
        parms = {'purpose': 'Removing New LineRemover',
                 'analyzed_text': analyzed}
        # return render(request, 'analyze.html', parms)
        djtext = analyzed

    if extraspaceremover == 'on':
        analyzed = ""
        for index, char in enumerate(djtext):
            if not (djtext[index] == " " and djtext[index+1] == " "):
                analyzed = analyzed+char
        parms = {'purpose': 'Removing Extra SpaceRemover',
                 'analyzed_text': analyzed}
        djtext = analyzed
        # return render(request, 'analyze.html', parms)

    if charcount == 'on':
        #analyzed = ""
        analyzed = "Total Length=", len(djtext)
        # for char in djtext:
        #    analyzed=analyzed+char
        parms = {'purpose': 'Character Count',
                 'analyzed_text': analyzed}
        # return render(request, 'analyze.html', parms)
        djtext = analyzed

    if (removepunc != "on" and fullcaps != 'on' and newlineremover != 'on' and extraspaceremover != 'on' and charcount != 'on'):
        return HttpResponse("Select any Operation...")  

    return render(request,'analyze.html',parms)
