console.log("loaded");

const testTopic = "test-topic";
const main = async () => {
  const zyku = await import("zyku/dist/index.js");
  const mainSeed = new Uint8Array([
    215, 24, 226, 44, 127, 255, 102, 250, 110, 148, 103, 62, 66, 82, 221, 139,
    166, 170, 82, 204, 1, 100, 22, 169, 93, 50, 176, 43, 191, 16, 6, 72,
  ]);

  const mainPrivateKey = await zyku.generatePrivateKey(mainSeed);
  const node = await zyku.baseNode(mainPrivateKey);
  node.subscribe(testTopic, (data: any) => {
    console.log("Node Received data: ", data);
  });
  node.printPublicMultiaddrs();
};

main();
