const command = "python pecan/scripts/tmstatus.py";
const refreshFrequency = 10000; // ms
const render = ({ output }) => <div class='screen'><div class='pecantmutil'>{`${output}`}</div></div>;

export { command, refreshFrequency, render };