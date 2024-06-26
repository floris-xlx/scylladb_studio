import { GetKeyLocalStorage, SetKeyLocalStorage } from "@/app/packages/caching/LocalStorageRouter";
import { ChangeOrganizationByUserId } from "@/app/packages/supabase/SupabaseOrgData";


// handle organization change
const handleOrganizationChange = async () => {
  try {
    const userId = GetKeyLocalStorage('userId');
    const cachedOrganization = GetKeyLocalStorage('cachedOrganization');

    await ChangeOrganizationByUserId(
      userId,
      cachedOrganization
    );
    
    SetKeyLocalStorage('organization', cachedOrganization);
  } catch (error) {
    console.error('Error changing organization:', error);
  } finally {

    // reload page for pending data
    if (typeof window !== 'undefined') {
      window.location.reload();
    }
  }
};

export default handleOrganizationChange;
