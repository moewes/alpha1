package net.moewes.berufsinfo.entities;

import com.microsoft.azure.storage.table.TableServiceEntity;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class Teilnehmer extends TableServiceEntity {

    private String name;
    private String email;
    private String token;

    public Teilnehmer(String pkey, String rkey) {
        super();
        setPartitionKey(pkey);
        setRowKey(rkey);
    }
}
