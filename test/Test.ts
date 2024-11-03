import assert from "assert";
import { 
  TestHelpers,
  R_AmountNotEnough
} from "generated";
const { MockDb, R } = TestHelpers;

describe("R contract AmountNotEnough event tests", () => {
  // Create mock db
  const mockDb = MockDb.createMockDb();

  // Creating mock for R contract AmountNotEnough event
  const event = R.AmountNotEnough.createMockEvent({/* It mocks event fields with default values. You can overwrite them if you need */});

  it("R_AmountNotEnough is created correctly", async () => {
    // Processing the event
    const mockDbUpdated = await R.AmountNotEnough.processEvent({
      event,
      mockDb,
    });

    // Getting the actual entity from the mock database
    let actualRAmountNotEnough = mockDbUpdated.entities.R_AmountNotEnough.get(
      `${event.chainId}_${event.block.number}_${event.logIndex}`
    );

    // Creating the expected entity
    const expectedRAmountNotEnough: R_AmountNotEnough = {
      id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
      buyVolume: event.params.buyVolume,
    };
    // Asserting that the entity in the mock database is the same as the expected entity
    assert.deepEqual(actualRAmountNotEnough, expectedRAmountNotEnough, "Actual RAmountNotEnough should be the same as the expectedRAmountNotEnough");
  });
});
