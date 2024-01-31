import { Injectable } from "@nestjs/common";
import * as fs from "fs";
import { promisify } from "util";
const readFileAsync = promisify(fs.readFile);
const writeFileAsync = promisify(fs.writeFile);

import { RaceEntry } from "../../race-startlist/models/race-entry.model";
import { RaceEntryInput } from "../../race-startlist/dto/race-entry.input";
import { randomUUID } from "crypto";
import { join } from "path";
const filePath = join(__dirname, "../", "../", "startlists.json");

@Injectable()
export class RaceStartlistRepo {
  async getAll(): Promise<RaceEntry[]> {
    const data = await readFileAsync(filePath, "utf8");
    const jsonData = JSON.parse(data);
    return jsonData as RaceEntry[];
  }

  async addNew(entry: RaceEntryInput): Promise<RaceEntry> {
    try {
      const existingsEntries = await this.getAll();
      const newEntry: RaceEntry = {
        ...entry,
        id: randomUUID(),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };

      existingsEntries.push(newEntry);
      const jsonData = JSON.stringify(existingsEntries, null);
      await writeFileAsync(filePath, jsonData, "utf8");

      console.info("Data has been written to the file successfully.");
      return newEntry;
    } catch (error) {
      console.error("Error writing to JSON file:", error);
    }
  }
}
