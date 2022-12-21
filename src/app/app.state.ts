import { Tutorial } from '../app/store/models/tutorial.model';

export interface AppState {
  readonly tutorialData: Tutorial[];
}