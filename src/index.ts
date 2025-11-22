const CONFIG = {
  QUERY_STRING: "category:{Promotions Social Forums}",
  STARTING_THREAD: 100,
  MAX_THREADS: 500,
};

const runScript = () => {
  try {
    for (let runCnt = 0; runCnt < 3; runCnt++) {
      const threads = GmailApp.search(
        CONFIG.QUERY_STRING,
        CONFIG.STARTING_THREAD,
        CONFIG.MAX_THREADS
      );
      threads.forEach((thread) => thread.moveToTrash());
    }
  } catch (error) {
    Logger.log(error);
  }
};
