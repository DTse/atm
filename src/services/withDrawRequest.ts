import axios from "axios";

const CancelToken = axios.CancelToken;
let cancel: any;

/**
 * Get filters request
 * @param {array} params
 * @return {element}
 **/
export const withDrawRequest = (amount: number): Promise<object> => {
  cancel && cancel();

  return new Promise((resolve, reject): void => {
    axios
      .post(
        `https://us-central1-atm-backend-2cc1b.cloudfunctions.net/withdraw`,
        { amount: amount },
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
            bankNotes: [...res.data]
          });
        } else {
          reject({ status: "fail" });
        }
      })
      .catch(error => {
        reject({ status: "fail", body: error });
      });
  });
};
