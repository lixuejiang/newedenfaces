/**
 * Created by lixuejiang on 16/8/15.
 */
import alt from '../alt';
import CharacterListActions from '../actions/CharacterListActions';

class CharacterListStore {
    constructor() {
        this.bindActions(CharacterListActions);
        this.characters = [];
    }

    onGetCharactersSuccess(data) {
        this.characters = data;
    }

    onGetCharactersFail(jqXhr) {
        toastr.error(jqXhr.responseJSON.message);
    }
}

export default alt.createStore(CharacterListStore);