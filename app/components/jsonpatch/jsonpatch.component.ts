import {Component} from 'angular2/core';

@Component({
  selector: 'jsonpatch',
	templateUrl: '/app/components/jsonpatch/jsonpatch.component.html'
})
export class JsonPatchComponent {
	public leftJsonText: string;
	public rightJsonText: string;
  public jsonPatchText: string;

	public compare() {
    var patches = jsonpatch.compare(JSON.parse(this.leftJsonText), JSON.parse(this.rightJsonText));
    
    this.jsonPatchText = JSON.stringify(patches, null, 2);
    
  //  var patches = fastjsonpatch.compare(this.leftJsonText, this.rightJsonText)
  //   
  //  this.jsonPatchText = JSON.stringify(patches);
    // this.jsonPatchText = "Hi Mom!"
	}
}