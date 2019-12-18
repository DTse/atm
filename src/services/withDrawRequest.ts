import axios from "axios";

const CancelToken = axios.CancelToken;
let cancel: any;

/**
 * Get filters request
 * @param {array} params
 * @return {element}
 **/
export const withDrawRequest = (amount: string): Promise<object> => {
  cancel && cancel();

  return new Promise((resolve): void => {
    axios
      .post(
        `https://us-central1-atm-backend-2cc1b.cloudfunctions.net/withdraw`,
        { amount: amount === "0" ? null : amount },
        {
          headers: {
            "Content-Type": "application/json"
          },
          cancelToken: new CancelToken(e => {
            cancel = e;
          })
        }
      )
      .then(res => {
        if (res.status === 200) {
          resolve({
            status: "success",
            bankNotes: [...res.data] as string[]
          });
        } else {
          resolve({ status: "fail", body: res.data });
        }
      })
      .catch(error => {
        resolve({ status: "fail", body: error.response.data });
      });
  });
};
