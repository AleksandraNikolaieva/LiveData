import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-upload-header",
    templateUrl: "./upload-header.component.html",
    styleUrls: ["./upload-header.component.scss"]
})
export class UploadHeaderComponent implements OnInit {
    constructor() {}
    title: string = "Credits Balance";
    label: string = "credits";
    balance: number = 1492;
    ngOnInit() {}
}
