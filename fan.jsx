const command = "bash pecan/scripts/fan";
const refreshFrequency = 2000; // ms

const render = ({ output }) => <div class='screen'><div class='pecanfan'>{`${output}`}</div></div>

export { command, refreshFrequency, render };
