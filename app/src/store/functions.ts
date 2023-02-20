import { isEqual } from "lodash";
import omitDeep from "omit-deep-lodash";
import { IndexedCollectionItem } from "./store";

export function assignIndexToCollection<T>(
  item: T[],
  offset: number
): IndexedCollectionItem<T>[] {
  const indexedCollection: IndexedCollectionItem<T>[] = item.map(
    (item, index) => {
      const indexed = item as IndexedCollectionItem<T>;
      indexed.storeIndex = offset + index;
      return indexed;
    }
  );
  return indexedCollection;
}

export function isAlreadyFetched<T>(
  fetchedCollection: IndexedCollectionItem<T>[],
  page: number,
  limit: number
) {
  const from = (page - 1) * limit;
  const to = page * limit - 1;
  let indexes: number[] = [];
  for (var i = from; i <= to; i++) {
    indexes.push(i);
  }
  const collectionIndexes = fetchedCollection.map((item) => item.storeIndex);

  const indexesToFetch = indexes.filter(
    (index) => !collectionIndexes.includes(index)
  );

  return indexesToFetch.length === 0;
}

export const isNewQuery = (paramsOld: object, paramsNew: object) => {
  //omit page and limit as this are used for pagination and do not change the base query
  const keysToOmit = ["page", "limit"];

  return !isEqual(
    omitDeep(paramsOld, keysToOmit),
    omitDeep(paramsNew, keysToOmit)
  );
};
