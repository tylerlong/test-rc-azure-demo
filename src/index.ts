import axios from 'axios';
import waitFor from 'wait-for-async';

(async () => {
  let count = 0;
  let successCount = 0;
  let failureCont = 0;
  // eslint-disable-next-line no-constant-condition
  while (true) {
    count += 1;
    const r = await axios.get(process.env.URL!);
    const data = r.data;
    if (data.indexOf('StatusCode: 401') !== -1) {
      successCount += 1;
    } else {
      failureCont += 1;
    }
    console.log(
      `Tried ${count} times, success: ${successCount}, failure: ${failureCont}`
    );
    await waitFor({interval: 5000});
  }
})();
