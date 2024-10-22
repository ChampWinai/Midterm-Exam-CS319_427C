class Database<T> {
    private entries: T[] = [];
  
    addEntry(entry: T): void {
      this.entries.push(entry);
    }
  
    getAllEntries(): T[] {
      return this.entries;
    }
  }
  