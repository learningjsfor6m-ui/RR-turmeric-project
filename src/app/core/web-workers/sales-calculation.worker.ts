/// <reference lib="webworker" />

addEventListener('message', ({ data }) => {
  const response = `worker response to ${data}`;
  postMessage(response);
});
addEventListener('message', ({ data }) => {
  const salesData = data;

  // Simulate heavy computation
  const result = salesData.reduce((acc: any, item: any) => {
    acc.totalRevenue += item.price * item.quantity;

    acc.category[item.category] =
      (acc.category[item.category] || 0) + item.quantity;

    return acc;
  }, {
    totalRevenue: 0,
    category: {}
  });

  // Send result back to main thread
  postMessage(result);
});
