let w = ` empathy,Irregardless, Colonel,Nonplussed,Disinterested,Enormity,Lieutenant,
Unabashed,concomitant,burnish,abjure,abrogate,acumen,adumbrate,alacrity,anathema,antipathy,approbation,
arrogate,ascetic,assiduous,boon,brusque,burnish,buttress,
calumny,capricious,clemency,cogent,concomitant,conflagration,conundrum,credulity,cupidity,
cursory,decry,defile,cajole,quiet, modest, reserved,deride,despot,diligent,
deleterious,demure,deprecate,deride,desecrate,discursive,dissemble,ebullient,
effrontery,egregious,enervate,eschew,
evanescent,evince,exculpate,execrable,expiate,expunge,extant,extol,fallacious,
fastidious,fatuous,feral,fetid,florid,fractious,garrulous,gregarious,hackneyed,harangue,
hegemony,impassive,imperious,impertinent,impervious,impetuous,impinge,implacable,
inchoate,incontrovert,ibleinde,fatigable,
hapless,
ephemeral,elated,eloquent,embezzle`




function difficulty() {


    e = document.getElementById('easy')
    n = document.getElementById('normal')
    h = document.getElementById('hard')
    if (e.checked != false) {

        alert('easy..6 secs will be added for each correct answer')
        x = 6
    } else if (n.checked != false) {
        alert('normal..5 secs will be added for each correct answer')
        x = 5
    } else {
        alert('hard..3 secs will be added for each correct answer')
        x = 3
    }
    document.getElementById('diff').style.display = 'none';
    document.getElementById('sub').setAttribute('disabled', true);
    document.getElementById('container').style.display = 'block'
    game(x)

}


function main() {

    location.reload();

}



words = w.split(',')
let word = ''
score = 0

function random() {
    word = words[Math.floor(Math.random() * words.length)];
    word = word.trim()
    document.getElementById('words').innerHTML = word
    words = words.filter(e => e !== word)


}


function reset() {

    document.getElementById('container').style.display = 'none'
    document.getElementById('over').style.display = 'block'
}



function game(x) {
    var time = setInterval(function() { startTime() }, 1000);
    let y = x
    console.log(y)
    var counter = 11



    function startTime() {

        if (counter == 0) {
            clearInterval(time)
            reset()


        } else {
            counter--
        }

        document.getElementById('sec').innerHTML = counter;
    }

    document.getElementById('inp').addEventListener('keypress', function(e) {

        if (e.key === "Enter") {

            let x = document.getElementById('inp').value

            if (x.toLowerCase() == word.toLowerCase()) {
                counter += y
                startTime()
                score += 1
                document.getElementById('scor').innerHTML = score
                document.getElementById('scors').innerHTML = score
            } else {
                reset()

            }
            console.log(word)
            console.log(document.getElementById('inp').value)
            document.getElementById('inp').value = ''
            random()
        }


    })

}

random()
