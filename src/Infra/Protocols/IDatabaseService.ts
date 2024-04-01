export interface IDatabaseService {
  disconnect: () => Promise<void>;
  getInstance: () => Promise<any>;
}
