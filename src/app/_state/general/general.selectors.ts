import { createFeatureSelector, createSelector } from '@ngrx/store';
import { GeneralState } from './general.reducer';

export const selectGeneralState = createFeatureSelector<GeneralState>('general');

export const selectLocateDungeon = createSelector(
	selectGeneralState,
	(generalState: GeneralState) => generalState.dungeon
);

export const selectDragonsList = createSelector(
	selectGeneralState,
	(generalState: GeneralState) => generalState.dragon
);

export const selectDragonsState = createSelector(
	selectGeneralState,
	(generalState: GeneralState) => generalState.dragon
);

export const selectDragonID = createSelector(
	selectGeneralState,
	(generalState: GeneralState) => generalState.selected
);


