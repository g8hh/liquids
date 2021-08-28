const END = {
    next() {
        if (tmp.step == 19) if (confirm('You wanted to RESET your progress to new game?')) {wipe(); save(); location.reload()}
        tmp.step = Math.min(tmp.step+1, this.desc.length-1)
    },
    desc: [
        ``,
        `...`,
        `Congratulation, you completed my game!`,
        `Nothing...`,
        `I said you beat my game! It no longer plays beyond ending...`,
        `I forgot to say you, will claim you things… Are you ready?`,
        `<img src='https://media2.giphy.com/media/l41K3o5TzvmhZwd4A/giphy.gif'><br><br>Don’t haste, I’ll wait...`,
        `<img src='images/secret.png'><br>Hello, I’m Agent… You are welcome at the ending!`,
        `<img src='images/secret.png'><br>I sincerely search who are hacked for no reason.`,
        `<img src='images/secret.png'><br>Nah, you aren’t got hacked, it’s fine. But you happened stuck!`,
        `<img src='images/secret.png'><br>Don’t worry, you can escape now, but I tell you <h1>VERY FIRST</h1> plan, sir`,
        `<img src='images/secret.png'><br>You filled water more than multiverses, yes?`,
        `<img src='images/secret.png'><br>What do you use to inflate liquid?`,
        `<img src='images/secret.png'><br>Okay, the second plan, you need to INSTANT drain all liquids!`,
        `<img src='images/secret.png'><br>It’s <h1>BLACK HOLE!</h1>`,
        `<img src='images/secret.png'><br>Need you to use that, then there will be WIPED`,
        `<img src='images/secret.png'><br>Oh, don’t worry again, you are good playing?`,
        `<img src='images/secret.png'><br>Shh...`,
        `<img src='images/secret.png'><br>I have no time to searching, but I say you...`,
        `<h1>Thank you for playing my game</h1><br><br>
        The game was made by MrRedShark77 in JAM summer of 2021`,
    ],
    btn: [
        ``,
        `What?`,
        `Okay, and what’s next?`,
        `Why?`,
        `Ok`,
        `Yeah`,
        `Ok`,
        `Ah, what are you doing now?`,
        `“Hacking” for what?`,
        `Oh no`,
        `Okay, but what’s the plan?`,
        `Yes`,
        `I don’t know`,
        `Really? But where’s the tool which drains?`,
        `Uh oh`,
        `*sigh* Well okay`,
        `Yeah, what if I got wiped?`,
        `?`,
        `...`,
        `Hard Reset, then start again!`,
    ],
}