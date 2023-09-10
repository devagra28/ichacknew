import { Fragment } from "react";

const Clock = ({ timerDays, timerHours, timerMinutes, timerSeconds }) => {
    return (
      <Fragment>
        <section className="timer-container">
          <section className="timer">
            <div className="clock">
              <section>
                <section className="clock-section">
                <span className="clock-border">{Math.floor(timerDays/10)}</span>
                <span className="clock-border">{timerDays%10}</span>
                </section>
                <span className="clock-letter">Days</span>
              </section>
              <span className="colon">:</span>
              <section>
                <section className="clock-section">
              <span className="clock-border">{Math.floor(timerHours/10)}</span>
                <span className="clock-border">{timerHours%10}</span>
                </section>
                <span className="clock-letter">Hours</span>
              </section>{" "}
              <span className="colon">:</span>
              <section>
              <section className="clock-section">
              <span className="clock-border">{Math.floor(timerMinutes/10)}</span>
                <span className="clock-border">{timerMinutes%10}</span>
                </section>
                <span className="clock-letter">Minutes</span>
              </section>{" "}
              <span className="colon">:</span>
              <section>
              <section className="clock-section">
              <span className="clock-border">{Math.floor(timerSeconds/10)}</span>
                <span className="clock-border">{timerSeconds%10}</span>
                </section>
                <span className="clock-letter">Seconds</span>
              </section>
            </div>
          </section>
        </section>
      </Fragment>
    );
  };
  
  Clock.defaultProps = {
    timerDays: 10,
    timerHours: 10,
    timerMinutes: 10,
    timerSeconds: 10,
  };
  
  export default Clock;