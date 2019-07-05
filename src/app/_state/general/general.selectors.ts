import { createFeatureSelector, createSelector } from '@ngrx/store';
import { GeneralState } from './general.reducer';

export const selectGeneralState = createFeatureSelector<GeneralState>('general');

export const selectDragonsList = createSelector(
	selectGeneralState,
	(generalState: GeneralState) => generalState.dragon
);