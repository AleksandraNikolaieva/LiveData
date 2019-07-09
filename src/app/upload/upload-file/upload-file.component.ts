import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-upload-file',
    templateUrl: './upload-file.component.html',
    styleUrls: ['./upload-file.component.scss']
})
export class UploadFileComponent {
    constructor() {}
    @Output() uploadClick = new EventEmitter<boolean>();
    title: string = 'Upload a file';
    caption: string =
        "Upload a CSV file with email addresses. We'll show you what's incorrect, what's outdated, and what's missing.";
    formTitle: string = 'Drag and drop CSV here';
    buttonTitle: string = 'Upload File';

    onClick(): void {
        this.uploadClick.emit(true);
    }
}
