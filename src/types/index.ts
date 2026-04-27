export interface MineralCategory {
  id: string;
  name: string;
  description: string;
  representativeIcon: string;
  color: string;
}

export type OperationStatus = 'active' | 'exploration' | 'development';

export interface Operation {
  id: string;
  name: string;
  region: string;
  description: string;
  status: OperationStatus;
}
