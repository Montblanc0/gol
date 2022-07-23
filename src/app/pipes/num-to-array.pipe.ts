import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
	name: "toArray",
})
export class NumToArrayPipe implements PipeTransform {
	transform(value: number): number[] {
		return [...Array(value).keys()];
	}
}
