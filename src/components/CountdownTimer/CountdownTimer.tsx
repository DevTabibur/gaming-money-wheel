import FlipCountdown from '@rumess/react-flip-countdown'


function FlipNumber() {
  return (
    <div className="font-bold text-white tracking-widest text-center">
      <div className="text=[#8486A9]">
        <FlipCountdown
          hideYear
          hideMonth
          hideMinute
          hideSecond
          theme="dark"
          size="small"
          endAt={new Date(
            Date.now() +
              1000 /* sec */ *
                60 /* min */ *
                60 /* hour */ *
                48 /* day */ *
                30 /* month */ *
                12 /* year */ *
                2
          ).toUTCString()}
        />
      </div>
    </div>
  )
}

export default FlipNumber
