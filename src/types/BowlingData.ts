export type BowlingData = {
  team: any;
  bowlerId: number;
  bowlerLastName: string;
  bowlerFirstName: string;
  bowlerMiddleInit?: string; // Middle init is optional
  bowlerAddress: string;
  bowlerCity: string;
  bowlerState: string;
  bowlerZip: string;
  bowlerPhoneNumber: string;
};
export type Team = {
  teamId: number;
  teamName: string;
};
