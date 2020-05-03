

const socket = io()

socket.on('connected', () => {
    console.log("Socket ID" + socket.id)
})

$(function () {
    let msglist = $('#msglist')
    let btnsend = $('#send')
    let msgbox = $('#inputValue')

    btnsend.click(function () {
        let msg = msgbox.val()
        socket.emit('send msg', { msg: msg })
    })

    socket.on('recv_msg', function (data) {
        console.log("it owrks")
        console.log(data.msg)
        msglist.append($('<li>' + data.msg + '</li>'))
    })
})

